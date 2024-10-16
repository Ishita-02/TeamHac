import axios from "axios";
import { useEffect, useState, useRef } from "react";
import github_icon from "../assets/github_icon.png";
import location from "../assets/location.png";
import laptop1 from "../assets/laptop1.png";

export default function GetJoinTeams() {

    interface Teams {
        _id: string,
        username: string,
        email: string,
        place: string,
        githubLink: string,
        skills: string,
        description: string
    }

    type TeamsArray = Teams[];

    const [teams, setTeams] = useState<TeamsArray>([]);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true); // State to check login status
    const isFirstRun = useRef(true);

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        console.log("window", window)
    
        const checkToken = () => {
            const token = window.localStorage.getItem('token');
            if (!token) {
                setIsLoggedIn(false); // Set the state to false if there's no token
                return;
            }
    
            const getTeams = async () => {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/getJoinTeams`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setTeams(response.data.teams);
                } catch (error) {
                    console.error("Error fetching teams", error);
                }
            };
            getTeams();
        };
    
        checkToken();
    }, []);
    
    const openGithub = (githubLink: string) => {
        window.open(githubLink, '_blank');
    };

    const handleSendEmail = (email: string) => {
        window.location.href = `mailto:${email}?subject=Your%20Subject&body=Your%20email%20template%20goes%20here`;
    };

    return (
        <div className="flex flex-col items-center justify-center mt-4">
            <h1 className="text-3xl font-bold mb-4 mt-20">Looking for Teammates?</h1>
            {/* Check if the user is not logged in */}
            {!isLoggedIn ? (
                <p className="text-red-600 text-xl">Please login to view the teams.</p>
            ) : (
                <div className="flex flex-wrap justify-center gap-4">
                    {teams.map((team) => (
                        <div key={team._id} className="relative bg-gray-900 text-white w-72 h-72 mx-auto rounded-xl shadow-md overflow-hidden md:max-w-xl m-5 hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out">
                            <div className="md:flex">
                                <div className="p-8">
                                    <p className="text-xl font-bold mt-2 absolute top-0 left-0 ml-5 mt-4">{team.username}</p>
                                    <img
                                        src={laptop1}
                                        alt="skills"
                                        className="w-5 h-5 mt-7 absolute left-0 ml-5"
                                    />
                                    <h1 className="text-gray-400 font absolute left ml-5 mt-6">{team.skills}</h1>
                                    <img
                                        src={location}
                                        alt="location"
                                        className="w-5 h-5 mt-7 absolute right-0 mr-20"
                                    />
                                    <h1 className="text-gray-400 font absolute right-0 mr-3 mt-6">{team.place}</h1>
                                    <p className="absolute left-5 mt-16 pb-1 text-gray-400 text-left mr-3">{team.description}</p>
                                </div>
                                <div className="absolute bottom-0 right-0 p-2">
                                    <img
                                        src={github_icon}
                                        alt="github"
                                        className="w-8 h-8 cursor-pointer mb-2 mr-2 rounded-full"
                                        onClick={() => openGithub(team.githubLink)}
                                    />
                                </div>
                                <button className="absolute bottom-0 left-0 flex w-1/3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 ml-4 mb-4 text-sm font-sem leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => handleSendEmail(team.email)}>
                                    Invite
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
