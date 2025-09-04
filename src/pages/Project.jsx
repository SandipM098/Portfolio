export const Project = () => {
  const projects = ["Project A", "Project B", "Project C"];
  const elements = [];

  for (let i = 0; i < projects.length; i++) {
    elements.push(<p key={i}>{projects[i]}</p>);
  }

  return (
    <div>{elements}</div>
  );
};
