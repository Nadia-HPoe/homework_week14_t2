//////////Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов.
const grades = [];
const length = 12;
for (let i = 0; i < length; i++) {
    const Grade = Math.round(Math.random() * 100);
    grades.push(Grade);
}
console.log(grades);

/////////Рассчитайте и выведите средний балл студентов, используя методы массивов.
const averageGrade = (num) => {
    let sum = 0;
    for (let i = 0; i < length; i += 1) {
        sum += num[i];
    }
    return sum / length;
};
console.log(averageGrade(grades).toFixed(2));

/////////3. Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива. 4. Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
let sortGrades = [...grades];
sortGrades.sort(function (a, b) {
    return a - b;
})
console.log(`Минимальный балл ${sortGrades[0]}, максимальный балл ${sortGrades[11]}`);

////////////////Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60)
let HighGrades = grades.filter(grade => grade >= 60);
console.log(HighGrades);

/////////////////Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60).
let LowGrades = grades.filter(grade => grade < 60);
console.log(LowGrades);

////////////////Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E
/// Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
/// Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
/// Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
/// Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
/// Если оценка ниже 20, преобразуйте её в "E"

let letterGrades = grades.map(grade => {
    if (grade < 20) {
        console.log("Оценка: E");
    }
    else if (grade < 39 && grade > 20) {
        console.log("Оценка: D");
    }
    else if (grade < 59 && grade > 40) {
        console.log("Оценка: C");
    } else if (grade < 79 && grade > 60) {
        console.log("Оценка: B");
    } else if (grade > 80) {
        console.log("Оценка: A");
    }
})