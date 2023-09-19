let w = 3;
let l = 4;
let h = 5;
let w2 = 6;
let r = 3;
let pi = 3.14;

// Hình chữ nhật
console.log("Chu vi hình chữ nhật là: " + 2 * ( w + h));
console.log("Diện tích hình chữ nhật là: " + ( w * h));
console.log("Thể tích hình chữ nhật là: " + ( w * h * l));

// Hình vuông
console.log("Chu vi hình vuông là: " + (w * 4));
console.log("Diện tích hình vuông là: " + (w * w));
console.log("Thể tích hình vuông là: " + (w * w * w));

// Hình tam giác
console.log("Chu vi hình tam giác là: " + (w + h + l));
console.log("Diện tích hình tam giác là: " + (w * h) / 2);
console.log("Thể tích hình tam giác là: " + (pi * Math.pow(r, 2) * h) / 3);

// Hình thoi
console.log("Chu vi hình thoi là: " + (w + h + l + w2));
console.log("Diện tích hình thoi là: " + ((w + w2) * h) / 2);

// Hình tròn
console.log("Chu vi hình tròn là: " + (r * 2 * pi));
console.log("Diện tích hình tròn là: " + (Math.pow(r, 2) * pi));
console.log("Thể tích hình cầu là: " + (pi * Math.pow(r * 2, 3)) / 6);

// Hình trụ
console.log("Diện tích toàn phần hình trụ là: " + (2 * pi * r * (r + h)));
console.log("Thể tích hình trụ là: " + (pi * r * 2 * h));

//Check prime
let i = 0;
	let a = 7;
	let flag = false;
	for(i = 2; i < a; i++) {
		if(a % i == 0) {
			console.log("Is not prime");
			flag = true;
			break;
		}
		if(!flag) {
			console.log("Is prime");
		}
	}


//Check odd number
let b = 10;
if(b % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}

//BMI
let height = 1.75;
let weight = 70;

console.log("BMI = " + (weight / Math.pow(height, 2)));

//Giải phương trình bậc hai
let x = 1;
let y = 6;
let z = 5;

let d = y * y - 4 * x * z;

console.log("Phương trình có 2 nghiệm là: " + (-y + Math.sqrt(d)) / (2 * x) , ( -y - Math.sqrt(d)) / (2*x));
