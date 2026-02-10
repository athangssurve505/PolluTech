import * as Icons from "@remixicon/react";

export default function Icon({ name, className }) {
  const IconComp = Icons[name];

  return IconComp ? <IconComp className={className} /> : null;
}

