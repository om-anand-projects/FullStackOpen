const Title = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

const Header = ({ name }) => {
  return (
    <>
      <h2>{name}</h2>
    </>
  )
}
const Part = (props) => {
  // console.log("Props " + props)
  return (
    <>
      <p>{props.part.name} {props.part.exercises}</p>
    </>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </>
  )
}

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((accumulator, currentPart) => accumulator + currentPart.exercises, 0)
  return (
    <>
      <p><b>total of {totalExercises} exercises</b></p>
    </>
  )
}
const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]



  return (
    <>
      <Title name="Web development curriculum" />
      {courses.map(course => <Course key={course.id} course={course} />)}
    </>
  )
}
export default App