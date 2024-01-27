interface TeamCardProps {
        team: {
            _id: string,
            hackathonName: string,
            teamName: string,
            modeOfHackathon: string,
            place: string,
            githubLink: string,
            skills: string,
            description: string
        }
    }

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">{team.teamName}</h1>
        <h1 className="text-xl font-bold">{team.hackathonName}</h1>
        <h1 className="text-xl font-bold">{team.modeOfHackathon}</h1>
        <h1 className="text-xl font-bold">{team.place}</h1>
        <h1 className="text-xl font-bold">{team.githubLink}</h1>
        <h1 className="text-xl font-bold">{team.skills}</h1>
        <h1 className="text-xl font-bold">{team.description}</h1>
    </div>
  )
}

export default TeamCard;