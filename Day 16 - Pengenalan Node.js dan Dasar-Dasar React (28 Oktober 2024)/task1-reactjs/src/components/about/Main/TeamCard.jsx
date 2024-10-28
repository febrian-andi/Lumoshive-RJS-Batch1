function TeamCard({member}) {
  return (
    <div className="team-member">
      <img src={member.image} alt="Team member" />
      <h4>{member.name}</h4>
      <p>{member.role}</p>
    </div>
  );
}

export default TeamCard;
