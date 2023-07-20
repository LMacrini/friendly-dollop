import React from "react";
import { Box } from "./Box";

export default function Container(props) {
  const {
    block: { Blocks, childBlocks },
  } = props;

  if (childBlocks.length == 3) {
    return (
      <Box className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <Blocks blocks={[childBlocks[0]]} />
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Blocks blocks={[childBlocks[1]]} />
            <Blocks blocks={[childBlocks[2]]} />
          </div>
        </div>
      </Box>
    );
  }
  return;
}
