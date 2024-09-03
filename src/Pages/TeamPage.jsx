import comm_director from "/public/comm director.png"
import communication_director_male from "/public/communications director.png"
import finan from "/public/financial officer.png"
import out from "/public/outreach cordinator.png"
import pro from "/public/project manager.png"
import president from "/public/president.png"
import Administrator from "/public/Administrator.png"
const TeamPage =()=>{
    return(
        <div className="happenings">
            <div className="who">
                <h2>BOSBOL &nbsp;FOUNDATION &nbsp; TEAM &nbsp; MEMBERS</h2>
            </div>
            <div className="whodesc">
                <p> Bebsol Foundation envisions a world where all people, regardless of their 
                    socioeconomic status, have access to quality education and healthcare, enabling them 
                    to reach their full potential and contribute to the betterment of their communities.
                 </p>
            </div>
             <br /><br />
            <div className="team-members">
                <div className="members">
                    <div className="mem-image">
                        <img src={president} alt="image" />
                    </div>
                    <div className="name">
                        <p>MISS &nbsp; BERNICE &nbsp; SAKYI &nbsp; ANAMOAH</p>
                    </div>
                    <div className="name">
                        <p>PRESIDENT</p>
                    </div>
                </div>
                <div className="members">
                    <div className="mem-image">
                        <img src={communication_director_male} alt="image" />
                    </div>
                    <div className="name">
                        <p>MR. &nbsp;  EMMANUEL &nbsp; TORGLAH</p>
                    </div>
                    <div className="name">
                        <p>COMMUNICATION &nbsp; DIRECTOR</p>
                    </div>
                </div>
                <div className="members"> 
                    <div className="mem-image">
                        <img src={comm_director} alt="image" />
                    </div>
                    <div className="name">
                        <p>BENEDICTA &nbsp; A. &nbsp;  ESHUN</p>
                    </div>
                    <div className="name">
                        <p>COMMUNICATION &nbsp; DIRECTOR</p>
                    </div></div>
                <div className="members">
                <div className="mem-image">
                        <img src={finan} alt="image" />
                    </div>
                    <div className="name">
                        <p>MISS &nbsp; OLIVIA &nbsp; ADDO</p>
                    </div>
                    <div className="name">
                        <p>FINANCIAL &nbsp; OFFICER</p>
                    </div>
                </div>
                <div className="members">
                <div className="mem-image">
                        <img src={out} alt="image" />
                    </div>
                    <div className="name">
                        <p>MISS &nbsp; EMMANUELLA &nbsp; SAKYI</p>
                    </div>
                    <div className="name">
                        <p>OUTREACH &nbsp; CORDINATOR</p>
                    </div>
                </div>
                <div className="members">
                <div className="mem-image">
                        <img src={pro} alt="image" />
                    </div>
                    <div className="name">
                        <p>MISS &nbsp; SUZY &nbsp; NARH </p>
                    </div>
                    <div className="name">
                        <p>PROJECT &nbsp; MANAGER</p>
                    </div>
                </div>
                
                <div className="members"> <div className="mem-image">
                        <img src={Administrator} alt="image" />
                    </div>
                    <div className="name">
                        <p>MISS &nbsp;LOVIA &nbsp; CINDY &nbsp; ANNAN  </p>
                    </div>
                    <div className="name">
                        <p>ADIMINISTRATOR</p>
                    </div></div>
               </div>
               
        </div>
    )
}

export default TeamPage;