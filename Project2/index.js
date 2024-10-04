const zodiac = document.getElementById("zodiac");
const body = document.body;

const changeBackground = () => {
    switch(zodiac.value) {
      case "aries":
        body.style.backgroundColor = "#fc0303"; // Bright Red for Aries
        break;
      case "taurus":
        body.style.backgroundColor = "#4CAF50"; // Green for Taurus
        break;
      case "gemini":
        body.style.backgroundColor = "#FFD700"; // Golden Yellow for Gemini
        break;
      case "cancer":
        body.style.backgroundColor = "#ADD8E6"; // Light Blue for Cancer
        break;
      case "leo":
        body.style.backgroundColor = "#FF4500"; // Orange-Red for Leo
        break;
      case "virgo":
        body.style.backgroundColor = "#8B4513"; // Brown for Virgo
        break;
      case "libra":
        body.style.backgroundColor = "#FFC0CB"; // Pink for Libra
        break;
      case "scorpio":
        body.style.backgroundColor = "#800080"; // Purple for Scorpio
        break;
      case "sagittarius":
        body.style.backgroundColor = "#0000FF"; // Bright Blue for Sagittarius
        break;
      case "capricorn":
        body.style.backgroundColor = "#2F4F4F"; // Dark Slate Gray for Capricorn
        break;
      case "aquarius":
        body.style.backgroundColor = "#00CED1"; // Dark Turquoise for Aquarius
        break;
      case "pisces":
        body.style.backgroundColor = "#4682B4"; // Steel Blue for Pisces
        break;
      default:
        body.style.backgroundColor = "#FFFFFF"; // White by default
        break;
    }
  };