const makeChange = (c) => {
  // your name here

	let q=0;
	let d=0;
	let n=0;
	let p=0;

	q=parseInt(c/25);
	c=c%25;
	d=parseInt(c/10);
	c=c%10;
	n=parseInt(c/5);
	c=c%5;

	p=c;

  
	return {"q":q , "d":d  , "n":n , "p":p};
	
	
	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
