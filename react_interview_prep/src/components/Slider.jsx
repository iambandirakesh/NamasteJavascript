import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SliderComponent() {
  const TeacherData = [
    {
      name: "John",
      img: "https://i.ibb.co/zNVnj6L/men-teacher-wearing-name-tag-that-says-he-is-smiling-95972-13.jpg",
      about:
        "John is a passionate teacher with 10 years of experience in phsics.",
    },
    {
      name: "Emily",
      img: "https://i.ibb.co/d4CyNvK/young-woman-avatar-character-vector-illustration-design-24877-18513.jpg",
      about:
        "Emily is a dedicated teacher with 8 years of experience in chemistry.",
    },
    {
      name: "Michael",
      img: "https://i.ibb.co/zNVnj6L/men-teacher-wearing-name-tag-that-says-he-is-smiling-95972-13.jpg",
      about:
        "Michael is a passionate teacher with 10 years of experience in phsics.",
    },
    {
      name: "Sarah",
      img: "https://i.ibb.co/d4CyNvK/young-woman-avatar-character-vector-illustration-design-24877-18513.jpg",
      about:
        "Sarah is a dedicated teacher with 8 years of experience in maths.",
    },
    {
      name: "David",
      img: "https://i.ibb.co/zNVnj6L/men-teacher-wearing-name-tag-that-says-he-is-smiling-95972-13.jpg",
      about:
        "David is a passionate teacher with 10 years of experience in maths.",
    },
  ];
  const [selectedTeacher, setSelectedTeacher] = React.useState(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="w-3/4 m-auto ">
      <div className="mt-20">
        <Slider {...settings}>
          {TeacherData.map((teacher, idx) => {
            return (
              <div className="bg-white h-[450px] text-black rounded-xl">
                <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center ">
                  <img
                    src={teacher.img}
                    alt={teacher.name}
                    className="h-44 w-44 rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl font-semibold ">{teacher.name}</p>
                  <p className="p-1">{teacher.about}</p>
                  <button
                    className="bg-indigo-500 w-30 text-white py-1 rounded-s"
                    onClick={() => setSelectedTeacher(teacher)}
                  >
                    View more
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      {selectedTeacher && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-70 flex justify-center items-center z-50">
          <div>
            <div>
              <h1 className="text-center text-2xl font-semibold">
                {selectedTeacher.name}
              </h1>
            </div>
            <div>
              <image
                src={selectedTeacher.img}
                alt={selectedTeacher.name}
                className="w-32 h-32 rounded-full"
              />
            </div>
            <div>
              <p>{selectedTeacher.abount}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SliderComponent;
