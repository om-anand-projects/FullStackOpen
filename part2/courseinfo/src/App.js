const Header = ({value}) => {
  return (
    <h1>{value}</h1>
  )
}

const Part = ({name, exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Content = ({courses}) => {
  return (
    <>
      { courses.map( course => 
          <Part key={course.id} name={course.name} exercises={course.exercises} />
        )
      }
    </>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header value={course.name} />
      <Content courses={course.parts} />
    </>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}

export default App