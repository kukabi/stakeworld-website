#!/bin/bash
# STAKEWORLD 2022
# Make a snapshots of kusama and polkadot nodes
# Run this script in crontab

# Error handling
error() {
    echo "Error on line $1"
    echo "Exiting..."
    exit 1
}

trap 'error $LINENO' ERR

# Setup variables
snapshotdir="/var/www/snapshot"
datadir="/home/polkadot"
workdir="/root/stakeworld-website"

# Snaphot targets
targets=(stakeworld-00p stakeworld-03p stakeworld-00k stakeworld-03k)

# Main snapshot function
function snapshot {
        echo "Snapshot of $i db=$db chain=$chain, port=$port"
	# Get block height from prometheus metrics
	blockheight=`wget -q localhost:$port/metrics -O - | grep best | cut -d " " -f2`
	date=`date +"%a %d %b @ %H:%M"`
	systemctl stop $i
	sleep 5
	cd $datadir/$1/chains/$chain
	if [[ "$db" == "rocksdb" ]]; then
    		dbdir="db/full"
	elif [[ "$db" == "paritydb" ]]; then
    		dbdir="paritydb/full"
	fi
	tar cf - $dbdir | lz4 > $snapshotdir/$db-$chain.lz4
	size=`du -sh $snapshotdir/$db-$chain.lz4 | cut -f1`
	fullsize=`du -sh "$datadir/$1/chains/$chain/$dbdir" | cut -f1`
	systemctl start $i
	echo "| [direct link](http://snapshot.stakeworld.nl/$db-$chain.lz4) | $chain | $db | pruning | $blockheight | $size | $fullsize | $date |" >> $workdir/docs/validate/snapshot.mdx
}

echo "Starting snapshot service..."

echo "Setting website header"
cat $workdir/docs/validate/snapshot.mdx.header > $workdir/docs/validate/snapshot.mdx
cat << EOF >> $workdir/docs/validate/snapshot.mdx
|  | Chain    | Database   | Pruning | Blockheight | Size       | Full         | Backup date     |
| ------------------------| ----------- | -------- | ------- | ----------- | ---------- | ------------ | -------- |
EOF

# Process all targets
for i in "${targets[@]}"
do
	db=unknown
	chain=unknown

	if grep -q paritydb "/etc/systemd/system/$i.service"; then
  		db="paritydb"
	fi
	if grep -q rocksdb "/etc/systemd/system/$i.service"; then
  		db="rocksdb"
	fi
	if grep -q 'chain kusama' "/etc/systemd/system/$i.service"; then
  		chain="ksmcc3"
	fi
	if grep -q 'chain polkadot' "/etc/systemd/system/$i.service"; then
  		chain="polkadot"
	fi

	port=`cat /etc/systemd/system/$i.service | grep -o -P  'prometheus-port.{0,5}' | cut -d " " -f2`

	snapshot "$i"
done

echo "Setting website body"
cat $workdir/docs/validate/snapshot.mdx.body >> $workdir/docs/validate/snapshot.mdx

echo Finished...
