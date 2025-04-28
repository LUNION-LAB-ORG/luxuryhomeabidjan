import { Slider } from "../ui/slider";

interface PropsPriceRange {
    priceRange: [number, number];
    setPriceRange: (priceRange: [number, number]) => void;
  }
  
  const PriceRangeSlider=({ priceRange, setPriceRange }: PropsPriceRange)=> {
    const handleChange = (value: [number, number]) => {
      setPriceRange(value);
    };
  
    return (
           <div className="w-full max-w-md mx-auto">
        <p className="mb-2 font-medium">Budget </p>
        {/* <Slider defaultValue={[0]} max={100} step={1} /> */}


        <Slider
          // min={0}
          max={15000000}
          step={1}
          defaultValue={[0]}
          // value={priceRange}
          onValueChange={handleChange}
          className="my-4"
          minStepsBetweenThumbs={0} // Je mets 0 pour s'assurer qu'il n'y a pas de plusieurs poignées
        />
        {/* <div className="flex justify-between text-sm text-muted-foreground">
          <span>{priceRange[0]} fcfa</span>
          <span>{priceRange[1]} fcfa</span>
        </div> */}
        <div>{priceRange}</div>
      </div>   
    );
  }


  export default PriceRangeSlider