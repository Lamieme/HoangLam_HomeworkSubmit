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
{
	const a = parseInt(prompt("Enter number: "));
// let b = 10;
if(a % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
	}
}

//BMI

let height = 1.75;
let weight = 85;


let bmi = (weight / Math.pow(height, 2));

console.log("BMI = " + bmi);

if(bmi < 16) {
	console.log("Gầy độ III"); // BMI <16: Gầy độ III
} else if(bmi < 17) {
	console.log("Gầy độ II"); // 16 ≤ BMI <17: Gầy độ II
} else if(bmi < 18.5) {
	console.log("Gầy độ I"); // 17 ≤ BMI <18.5: Gầy độ I
} else if (bmi < 25) {
	console.log("Bình thường"); // 18.5 ≤ BMI <25: Bình thường
} else if(bmi < 30) {
	console.log("Thừa cân"); // 25 ≤ BMI <30: Thừa cân
} else if(bmi <= 35) {
	console.log("Béo phì độ I"); // 30 ≤ BMI 35: Béo phì độ 1
}
else if(bmi < 40) {
	console.log("Béo phì độ II"); // 35 ≤ BMI <40: Béo phì độ II
}
else {
	console.log("Béo phì độ III"); // BMI >40: Béo phì độ III
}


//Giải phương trình bậc hai
{
	let a = 1;
	let b = 6;
	let c = 5;
	let x1;
	let x2;

	const delta = b * b - 4 * a * c;

	if(delta < 0) {
		console.log("Phương trình vô nghiệm");
	} else if(delta == 0) {
		x1 = x2 = (- b / 2 * a);
		console.log("Phương trình có nghiệm kép: " + x1);
	} else {
		x1 = (- b + Math.sqrt(delta)) / (2 * a);
		x2 = ( - b - Math.sqrt(delta)) / (2 * a);
		console.log("Phương trình có 2 nghiệm: " + x1 + "" + x2);
	}
	

}
