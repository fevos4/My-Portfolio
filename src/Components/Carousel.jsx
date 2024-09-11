const Carousel = (props) => {
    const leftScrollHandler = () => {
      scrollhandler("left", 5, 270, 10);
    };
  
    const rightScrollHandler = () => {
      scrollhandler("right", 5, 270, 10);
    };
  
    const scrollhandler = (direction, speed, distance, step) => {
      var element = document.getElementById("containerSlide");
      let scrollAmount = 0;
      var slideTimer = setInterval(function () {
        if (direction === "left") {
          element.scrollLeft -= step;
        } else {
          element.scrollLeft += step;
        }
  
        scrollAmount += step;
        if (scrollAmount >= distance) {
          window.clearInterval(slideTimer);
        }
      }, speed);
    };
  
    return (
      <div className="w-full flex justify-center items-center px-4">
        {props.arrows && (
          <button onClick={leftScrollHandler} className="mx-2">
            {/* Add arrow icon here */}
          </button>
        )}
  
        <div
          id="containerSlide"
          className="w-full h-full overflow-x-auto flex scroll snap-x snap-mandatory hide-scrollbar"
        >
          <div className="flex space-x-4 py-5">
            {props.children}
          </div>
        </div>
  
        {props.arrows && (
          <button onClick={rightScrollHandler} className="mx-2">
            {/* Add arrow icon here */}
          </button>
        )}
      </div>
    );
  };
  
  export default Carousel;
  