import React from "react";

function Whiteboard() {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 grid grid-cols-4">
            <div className="font-bold italic text-center">2020</div>
            <div className="font-light text-md">
              <div>June - August</div>
            </div>

        <div className="border-r-4 border-black h-full z-29">
          <div className="w-5 h-5 bg-gray-500 rounded-full z-30"></div>
        </div>
      </div>

      <div className="col-span-3">
        <div className="font-bold">Proyecto 1</div>
        <div className="italic">Empresa 1</div>
        <div className="mb-10">
          Fusce auctor gravida dui, ut tristique nisi
          aliquam quis. Maecenas id ligula ac dui mollis
          tempor. Sed vitae ex eros. Proin nisl felis,
          consectetur sed elit sed, vestibulum ultrices
          nibh.
        </div>
      </div>
    </div>

    //   <div className="relative mt-5 text-left">
    //     <div className="flex items-center relative">
    //         <div className="font-bold italic">2020</div>
    //         <div className="md:flex space-x-1 text-xs">
    //           <div>Abr.</div>
    //           <div>-</div>
    //           <div>Jun.</div>
    //         </div>

    //       <div className="border-r-4 border-black h-full absolute z-29">
    //         <div className="w-5 h-5 bg-gray-500 rounded-full z-30"></div>
    //       </div>

    //       <div className="ml-10">
    //         <div className="font-bold">Proyecto 1</div>
    //         <div className="italic md:mb-4">Empresa 1</div>
    //         <div className="mb-4 mt-2 md:hidden">
    //           <div className="font-bold">2020</div>
    //           <div className="text-xs">Abril - Junio</div>
    //         </div>
    //         <div className="mb-10">
    //           Fusce auctor gravida dui, ut tristique nisi
    //           aliquam quis. Maecenas id ligula ac dui mollis
    //           tempor. Sed vitae ex eros. Proin nisl felis,
    //           consectetur sed elit sed, vestibulum ultrices
    //           nibh.
    //         </div>
    // //       </div>
    // //     </div>

    //     <div className="flex items-center relative">
    //       <div className="hidden md:block w-20">
    //         <div className="font-bold italic">2020</div>
    //         <div className="md:flex space-x-1 text-xs">
    //           <div>Jul.</div>
    //           <div>-</div>
    //           <div>Ago.</div>
    //         </div>
    //       </div>

    //       <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
    //         <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
    //       </div>

    //       <div className="ml-10">
    //         <div className="font-bold">Proyecto 2</div>
    //         <div className="italic md:mb-4">Empresa 2</div>
    //         <div className="mb-4 mt-2 md:hidden">
    //           <div className="font-bold">2020</div>
    //           <div className="text-xs">Julio - Agosto</div>
    //         </div>
    //         <div className="mb-10">
    //           Fusce auctor gravida dui, ut tristique nisi
    //           aliquam quis. Maecenas id ligula ac dui mollis
    //           tempor. Sed vitae ex eros. Proin nisl felis,
    //           consectetur sed elit sed, vestibulum ultrices
    //           nibh.
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex items-center relative">
    //       <div className="hidden md:block w-20">
    //         <div className="font-bold italic">2020</div>
    //         <div className="md:flex space-x-1 text-xs">
    //           <div>Ago.</div>
    //           <div>-</div>
    //           <div>Hoy.</div>
    //         </div>
    //       </div>

    //       <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
    //         <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
    //         <i className="fas fa-circle bottom-0 -ml-2 absolute"></i>
    //       </div>

    //       <div className="ml-10">
    //         <div className="font-bold">Proyecto 3</div>
    //         <div className="italic md:mb-4">Empresa 3</div>
    //         <div className="mb-4 mt-2 md:hidden">
    //           <div className="font-bold">2020</div>
    //           <div className="text-xs">Agosto - Hoy</div>
    //         </div>
    //         <div className="mb-10">
    //           Fusce auctor gravida dui, ut tristique nisi
    //           aliquam quis. Maecenas id ligula ac dui mollis
    //           tempor. Sed vitae ex eros. Proin nisl felis,
    //           consectetur sed elit sed, vestibulum ultrices
    //           nibh.
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
}

export default Whiteboard;
