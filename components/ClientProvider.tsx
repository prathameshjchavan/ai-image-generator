"use client";

import { Fragment, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

type Props = {
	children: ReactNode;
};

const ClientProvider = ({ children }: Props) => {
	return (
		<Fragment>
			<Toaster position="bottom-center" />
			{children}
		</Fragment>
	);
};

export default ClientProvider;
