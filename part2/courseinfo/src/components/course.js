const Header = ({ value }) => {
    return (
        <h1>{value}</h1>
    )
}

const Part = ({ name, exercises }) => {
    return (
        <p>{name} {exercises}</p>
    )
}

const Total = ({ courses }) => {
    return (
        <strong>
            total of {courses.reduce((reducingValue, course) => reducingValue + course.exercises, 0)} exercises
        </strong>
    )
}

const Content = ({ courses }) => {
    return (
        <>
            {courses.map(course =>
                <Part key={course.id} name={course.name} exercises={course.exercises} />
            )
            }
            <Total courses={courses} />
        </>
    )
}

const Course = ({ course }) => {
    return (
        <>
            <Header value={course.name} />
            <Content courses={course.parts} />
        </>
    )
}

export default Course