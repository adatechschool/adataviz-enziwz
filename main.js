fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/ascenseurs-escalators-tele-surveillance-temps-reel/records?limit=20")
  .then(response => response.json())
  .then((data) => {
    console.log(data.results)
    const agenda = data.results.filter((eventGroup) => {
      return eventGroup.group === "Agenda"
    })
    console.log(agenda)
    agenda.forEach((event) => {
      console.log(event.title)
      // On va pouvoir construire la card
    })
  })

  