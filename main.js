document.querySelector('#searchBtn').addEventListener("click", getRacingData);

function getRacingData(e) {
    const season = document.querySelector('season').value
    const round = document.querySelector('round').value

    fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector("standingBox").innerHTML = `
                <table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">Position</th>
                    <th scope="col">name</th>
                    <th scope="col">Nationality</th>
                    <th scope="col">Sponsor</th>
                    <th scope="col">Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>${data.MRData.StandingsTable.StandingsLists.DriverStandings.position}</td>
                    <td>${data.MRData.StandingsTable.StandingsLists.DriverStandings.Driver.familyName}</td>
                    <td>${data.MRData.StandingsTable.StandingsLists.DriverStandings.Driver.nationality}</td>
                    <td>${data.MRData.StandingsTable.StandingsLists.DriverStandings.Constructors.constructorId}</td>
                    <td>${data.MRData.StandingsTable.StandingsLists.DriverStandings.points}</td>
                    </tr>
                </tbody>
                </table>
            `;
        })
        .catch((err) => {
            console.log("No season has occured.", err);
        });

    e.preventDefault();
}   
    