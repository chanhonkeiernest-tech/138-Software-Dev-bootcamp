class student{
    #name;
    #id;
    #grades;
    #attendance;
    constructor(name, id, grades, attendance){
        this.#name = name;
        this.#id = !Number.isNaN(Number(id)) ? id : new Error("invalid id");
        this.#grades = Array.isArray(grades)
            ? grades.filter(g => typeof g === 'number' && !Number.isNaN(g))
            : [];
        this.#attendance = Array.isArray(attendance) ? attendance : [];
    }

    getGrades(){
        return [...this.#grades];
    }

    getAttendance(){
        return [...this.#attendance];
    }
}

function calculateAverage(studentObj){
    if (!(studentObj instanceof student)){
        throw new Error("calculateAverage expects a student instance");
    }

    const grades = studentObj.getGrades();
    if (!grades.length) return 0;

    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}

function getLetterGrade(score){

}