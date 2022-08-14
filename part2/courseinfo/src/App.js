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

const Total = ({courses}) => {
  return (
    <strong>
      total of {courses.reduce( (reducingValue, course) => reducingValue + course.exercises, 0)} exercises
    </strong>
  )
}

const Content = ({courses}) => {
  return (
    <>
      { courses.map( course => 
          <Part key={course.id} name={course.name} exercises={course.exercises} />
        )
      }
      <Total courses={courses} />
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
    <div>
      {
        courses.map( course => <Course key={course.id} course={course} />)
      }
    </div>
  )
}

export default App