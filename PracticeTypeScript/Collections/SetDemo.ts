let ids=new Set<number>();
ids.add(1);
ids.add(2);
ids.add(3);
ids.add(3);
ids.add(4);

console.log(ids);
console.log("Ids has 2: "+ids.has(2));
console.log(ids.delete(2));// returns true if 2 exists else returns false
console.log("Ids has 2: "+ids.has(2));
console.log("Ids Size: "+ids.size);
console.log("--------------------------");
ids.forEach(value=>{
    console.log(value);
});