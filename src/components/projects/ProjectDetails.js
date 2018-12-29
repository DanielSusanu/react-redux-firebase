import React from 'react'

const ProjectDetails = (props) => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - {id}</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Daniel</div>
          <div>12/29/2018</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
