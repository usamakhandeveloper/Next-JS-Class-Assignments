import CarCard from "./CarCard"

const FeatureCar = () => {
    const carDetails = [
        { carName: "Toyota Yaris", carPrice : "42.9 - 61.0", reviews: 741 , imagePath: "/assets/Yaris.png"},
        { carName: "Suzuki Cultus", carPrice : "36.8 - 44.5", reviews: 378, imagePath: "/assets/Suzuki_Cultus_-_PNG.png"},
        { carName: "Honda BR-V", carPrice : "61.5 - 80.4", reviews: 289, imagePath: "/assets/Honda_BRV_Front.jpg"},
        { carName: "Changan Alsvin", carPrice : "38.3 - 49.6", reviews: 620, imagePath: "/assets/Alsvin_-_PNG.png"},
    ]
  return (
    <div>
        <div className="flex gap-4 flex-wrap justify-center">
            {
                carDetails.map((car) => {
                    return (
                        <CarCard carName={car.carName} carPrice={car.carPrice} reviews={car.reviews} imagePath={car.imagePath} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default FeatureCar