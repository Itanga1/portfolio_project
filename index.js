const showProject = (projectId)=>{
  const project = document.getElementById(projectId);

  if(project.style.display!="flex"){
    project.style.display="flex"
  }else{
    project.style.display="none"
  }
}
const menu = document.getElementById('menu')
function handleCloseMenu(){
  menu.style.display = 'none'
}
function handleShowMenu(){
  menu.style.display = 'flex'
}
const handleMenuItemClick = () =>{
  menu.style.display='none'
}