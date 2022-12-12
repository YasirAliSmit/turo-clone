export const Content = () => {
  return (
    <div className="img-back">
      <section className="parent-datetime ">
        <div className="dateandtime boxOne">
          <div className="search">
            <div className="searchinput1 text-tiny"> Where</div>
            <input
              type="text"
              placeholder="City ,airpot , address or hotel...."
              className="input searchinput"
            />
          </div>
        </div>
        <div className="dateandtime From">
          <label className="fromdate1 text-tiny">From</label>
          <div style={{backgroundColor:'white'}} className="datefirst">
            {" "}
            <input style={{backgroundColor:"white"}}
              type="date"
              className="fromdate "
              id="birthday"
              name="birthday"
            />
            <input  style={{backgroundColor:"white"}} type="time" id="appt" className=" fromtime" name="appt" />
          </div>{" "}
          <></>
        </div>
        <div className=" dateandtime Until">
          <label className=" text-tiny">Until</label>
          <div className="datefirst">
            {" "}
            <input style={{backgroundColor:"white"}}
              type="date"
              className=" untildate"
              id="birthday"
              name="birthday"
            />
            <input style={{backgroundColor:"white"}} type="time" className=" untiltime" id="appt" name="appt" />
          </div>{" "}
          <button type="button" className="P-btn btn btn-primary">
            Search For Car
          </button>
        </div>
      </section>
    </div>
  );
};
