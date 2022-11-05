import propTypes from 'prop-types'

const Profile=({func,fullName,Bio,Profession,children})=>{
    
    return(
        <>
        <h2>{fullName} </h2>
        <p> {Bio} </p>
        <h4>{Profession} </h4>
        <button onClick={func}>clickme!</button>
        {children}
        </>

    )
};


export default Profile;
Profile.propTypes={
    fullName : propTypes.string.isRequired,
    Bio:propTypes.string,
    Profession:propTypes.string}

