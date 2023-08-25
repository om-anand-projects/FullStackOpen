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

  export default Course