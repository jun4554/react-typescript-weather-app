type FormProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: any) => void;
  city: string;
};

const Form = (props: FormProps) => {
  return (
    <div>
      <form onSubmit={props.getWeather}>
        <input
          type="text"
          name="city"
          placeholder="都市名を入力してください"
          onChange={(e) => props.setCity(e.target.value)}
          value={props.city}
        />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default Form;
