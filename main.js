let standingsBoxEl = document.getElementById('standingsBox')

const getRacingData = async function(season=2022, round=3) {
    try {
        const response = await fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
        const racingData = await response.json()
        
        const StandingsTableData = racingData.MRData.StandingsTable
        
        const StandingsListsData = StandingsTableData.StandingsLists[0]
        // console.log(StandingsListsData)
        const DriverStandingsData = StandingsListsData.DriverStandings
        // console.log(DriverStandingsData)
        for (let i=0; i<7; i++){
            displayRacingData(DriverStandingsData[i])
        }
    }
    catch (err) {
        console.log("There was an error!")
        console.log(err)
    }
}

function displayRacingData(driver) {
    // let standingBoxEl = document.getElementsByTagName('tbdoy')
    console.log(driver.constructors)
    standingsBoxEl.innerHTML += `
    <tr>
        <td>${driver.position}</td>
        <td>${driver.Driver.familyName}</td>
        <td>${driver.Driver.nationality}</td>
        <td>${driver.Constructors[0].constructorId}</td>
        <td>${driver.points}</td>
    </tr>
        `
}

function searchData(){
    
}

(async () => await getRacingData())()