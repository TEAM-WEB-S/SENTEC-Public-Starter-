import Member1 from "../../public/Members/Member1.jpeg"
import Member2 from "../../public/Members/Member2.jpeg"
import Member3 from "../../public/Members/Member3.jpeg"
import Image from "next/image"

const Members = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <h1 className="ml-4 mt-16 text-2xl font-bold">Meet SENTEC Members</h1>
        <button className="primaryBtn mx-12 ml-auto mt-16">
          <a href="#" className={global.primaryBtn}>
            All Members
          </a>
        </button>
      </div>

      <div className="mb-24 mt-16 flex flex-wrap items-center justify-center">
        <div className="m-8 flex w-48 flex-col items-center">
          <div className="h-48 w-full">
            <Image
              src={Member1}
              alt="ashar khan.jpg"
            />
          </div>
          <h3 className="text-lg font-bold">Ashar Khan</h3>
          <p className="text-sm">President</p>
          <button type="button" className="primaryBtn mt-2">
            Contact
          </button>
        </div>

        <div className="m-8 flex w-48 flex-col items-center">
          <div className="h-48 w-full">
            <Image
              src={Member2}
              alt="umair lafir.jpg"
            />
          </div>
          <h3 className="text-lg font-bold">Umair Lafir</h3>
          <p className="text-sm">Head</p>
          <button type="button" className="primaryBtn mt-2">
            Contact
          </button>
        </div>

        <div className="m-8 flex w-48 flex-col items-center">
          <div className="h-48 w-full">
            <Image
              src={Member3}
              alt="souhkat sohail.jpg"
            />
          </div>
          <h3 className="text-lg font-bold">Shoukat Sohail</h3>
          <p className="text-sm">Co-head</p>
          <button type="button" className="primaryBtn mt-2">
            Contact
          </button>
        </div>

        <div className="m-8 flex w-48 flex-col items-center">
          <div className="h-48 w-full">
            <Image
              src={Member3}
              alt="shoukat sohail.jpg"
            />
          </div>
          <h3 className="text-lg font-bold">Shoukat Sohail</h3>
          <p className="text-sm">Co-head</p>
          <button type="button" className="primaryBtn mt-2">
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}

export default Members;
