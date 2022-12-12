export const ContentCenter = () => {
  return (
    <>
      <div className="img-back">
        <div className="box-center">
          <div className=" Content-Center">
            <div className="Custom1 Search-Center">
                <div style={{fontWeight:'bold',position:'absolute',left:'30px'}}>Where</div>
              <input type="text" className="Search-Custom" placeholder="City ,airpot , address or hotels..." />
            </div>
            <div className="Custom2 From-date-From-time"><>
  
  <input type="date" className="datepick" name="birthday" />
  <input type="time" className="appt" name="appt" />

</>
</div>
            <div className="Custom3 Until-date-From-time"></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
