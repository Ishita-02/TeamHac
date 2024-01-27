import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import github_icon from "../assets/github_icon.png";
import location from  "../assets/location.png";
import skills from "../assets/skills.png";
import laptop1 from "../assets/laptop1.png";

export default function GetTeams() {

    interface Teams {
        _id: string,
        hackathonName: string,
        teamName: string,
        modeOfHackathon: string,
        place: string,
        githubLink: string,
        skills: string,
        description: string
    }

    type TeamsArray = Teams[];

    const [teams, setTeams] = useState<TeamsArray>([]);

    useEffect(() => {
        const getTeams = async () => {
            const response = await axios.get('http://localhost:3000/auth/getTeams', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setTeams(response.data.teams);
        };
        getTeams();
    }, []);

    const openGithub = (githubLink: string) => {
        window.open(githubLink, '_blank');
      };

    return (
        <div className="flex flex-col items-center justify-center mt-4">
          <h1 className="text-3xl font-bold mb-4">Teams</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {teams.map((team) => (
              <Card key={team._id} className="w-64 h-64 relative">
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold mt-2 absolute top-0 left-0 ml-3">{team.teamName}</h1>
                  <h1 className="text font">{team.hackathonName}</h1>
                  <div className="flex items-center">
                    <p className="text font-bold absolute right-0 mt-8 mr-2">{team.modeOfHackathon}</p>
                    <img
                      src={location}
                      alt="location"
                      className="w-3.5 h-3.5 mt-9 absolute right-1 mr-14"
                    />
                    <h1 className="text font mt-20 absolute right-0 mr-6">{team.place}</h1>
                  </div>
                  <div className="flex items-center mt-2">
                    <img
                      src={laptop1}
                      alt="skills"
                      className="w-5 h-5 mt-12 absolute left-0 ml-2"
                    />
                    <h1 className="text font absolute left ml-10 mt-12">{team.skills}</h1>
                    <div className="absolute left ml-2 mt-24 pt-2">
                        <h1 className="text font ">{team.description}</h1>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 p-2">
                    <img
                      src={github_icon}
                      alt="github"
                      className="w-8 h-8 cursor-pointer mb-1.5"
                      onClick={() => openGithub(team.githubLink)}
                    />
                  </div>
                </div>
                <button className="absolute  bottom-0 left-0 flex w-1/3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 ml-3 mb-3 text-sm font-sem leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Apply
                </button>
              </Card>
            ))}
          </div>
        </div>
      );
}