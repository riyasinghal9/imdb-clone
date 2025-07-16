

function Heading(props) {
    console.log(props)
  return (
    <>
      <h1 style={{color: props.color || 'blue', fontSize: '48px'}}>My heading.</h1>
    </>
  )
}

export default Heading
