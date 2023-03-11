import styled from "styled-components";

const Wrapper = styled.div`
  align-self: center;
  color: white;
  background: #b0b0b0;
  padding: 10px;
  border-radius: 10px;
  max-width: 512px;
  font-size: x-small;
  height: fit-content;

  li {
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 15px;
  }
`;

const CardFacts = () => {
  const CurrentDate = new Date();
  const WeekDaysMap = { 0: "Monday", 1: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Saturday", 6: "Sunday" };
  const DateText = `${
    WeekDaysMap[CurrentDate.getDay()]
  }, ${CurrentDate.getDate()}.${CurrentDate.getMonth()}.${CurrentDate.getFullYear()}, ${CurrentDate.getHours()}:${CurrentDate.getMinutes()}`;
  return (
    <Wrapper>
      <p>Stepanov Almaz Vladimirovich</p>
      <ul>
        <li>Lives at the outskirts of Kazan near pine forest</li>
        <li>
          Recently likes to play Rhythm-game !osu in the free time or find sophisticated ways to make money on game
          retailing app called Steam(ye strange)
        </li>
        <li>Sometimes reads Japanese novels translated into English language(enjoy beauty of both things)</li>
      </ul>
      <p>{DateText}</p>
    </Wrapper>
  );
};

export default CardFacts;
