import Profile from "./profile/profile";

function App() {
  const handleName=()=>{
    alert('this is the profile of Khawla')
  }
  return (
    <div className="App">
      <Profile func={handleName} fullName={"Khawla Ajengui"} Bio={"I have 30 years old. Im a mom of two boys"} Profession={"Im a designer and a futur developer"} > </Profile>
    </div>
  );
}

export default App;
