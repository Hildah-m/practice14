let color =["red","green","purple","yellow","pink","blue"];
console.log(color[1]);

color.push("yellow")
console.log(color)

color.shift();
console.log(color);

color.reverse();
console.log(color);

color.sort();
console.log(color);

console.log(color.length);

for(let c = 0; c < color.length; c++){
    console.log(color[c]);
}

color.reverse();
console.log(color);

color = [...new Set(color)];
console.log(color);

color.pop();
console.log(color);

let colorString = color.join(',');
console.log(colorString);




