import Image from "next/image";


export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <Image src="beanEater.svg" width={300} height={300} alt="loading...."/>
    </div>
  )
}
