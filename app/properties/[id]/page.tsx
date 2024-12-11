import Image from "next/image";
import ReservationSideBar from "@/app/components/properties/ReservationSideBar";
const PropertyDetailPage = () => {
  return <main className="max-w-[1500px] m-auto p-6 ">
        <div className="w-full h-[40vh] mb-4 overflow-hidden rounded-xl relative">
            <Image
                fill
                src="/IMG_7137-scaled.jpg"
                className="object-cover w-full h-full"
                alt="Beach House"
            />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6  pr-6 col-span-3">
                    <h1 className="mb-4  text-4xl">Property name</h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 3bed - 1 Bathroom
                    </span>
                    <hr/>

                    <div className="py-6 flex items-center space-x-4">
                        <Image
                            src="/landlord.jpg"
                            alt="landlord image"
                            width={75}
                            height={20}
                            className="rounded-full"
                        />
                        <div><strong>John Doe</strong> is your host page</div>
                    </div>
                    <hr />
                    <p className="mt-6 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid molestiae delectus provident maxime aperiam, quisquam possimus, dolore officia distinctio corporis itaque obcaecati dolorem ut sed. Dolorum quibusdam velit nihil!
                    </p>
                </div>
                <ReservationSideBar/>
        </div>
  </main>;
};
export default PropertyDetailPage;
