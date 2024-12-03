const TemplateExpressions = () => {
  const data = {
    name: "João",
    job: "Dev"
  }

  return(
    <div>
      <h1>Hello {data.name}, how are you?</h1>
      <p>You are a {data.job}</p>
      {console.log("React Working!")}
    </div>
  )
}

export default TemplateExpressions