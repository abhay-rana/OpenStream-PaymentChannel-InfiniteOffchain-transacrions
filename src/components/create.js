import React, { useState } from "react";

import Button from "./Button";
import Input from "./Input";

const Create = () => {
	const [tonAmount, setTonAmount] = useState("");
	const [address, setAddress] = useState("");
	const [schedule, setSchedule] = useState("");

	return (
		<>
			<div className="flex flex-col justify-center items-center">
				<div>
					<img
						src="https://s3-alpha-sig.figma.com/img/fb68/5ec1/1b06bd1f993de525d2032f06cc6c0f80?Expires=1657497600&Signature=duqJX8SlSPwwLk36L7R4go8ggYIpTLzEcVpOqH7tP-AO6RivkdceLR7-gmUdNM38A-kSiJn6hZ0nLyweRZYY87e0IfRCGhYKxf7ovXJYI6YbF2zIQMhZQcG6JT6ET~4FfE8Pcx2ZNQwrvYRNj68eNMrFzboJrLNL7ERX0Tr3t5a3h4ulY3YpYfLSEIipvr9jBFSlKv5Pwx8v-n5nAGU7nMCqfoA-cEeBkM9qfoSbuNmYIFmpajkL2V~vnO~NMM9jWkXJ6FZSrqlOB~102NQ-MfjY6WY4Eh4GDmDtDF26O2q~ILA6DQcZCOSqrVXl8Qc42U17-uEenwlAbvmTP30wKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
						className=" h-[150px] w-[150px] self-center"
					/>
				</div>
				<h1 className="font-extrabold text-2xl">Create a Steam</h1>
				<p className="text-black/40 font-semibold">Stream Payrolls to Your DAO Members for Their Contributions</p>
				<div className="flex flex-col rounded-[44px] bg-white gap-[32px] p-[32px] items-start h-[200px]">
					<div className="flex flex-col items-start">
						<Input label="Monthly Compound" placeholder="5.00 TON" value={tonAmount} onChange={(e) => setTonAmount(e.target.value)} name="tonAmount" />
						<Input label="Enter the Address" placeholder="alice.ton" value={tonAmount} onChange={(e) => setAddress(e.target.value)} name="tonAmount" />
						<span>Streaming Schedule</span>
						<div className="flex-col items-start gap-[8px] w-[400px] h-[108px]">
							<div className="flex gap-[10px]">
								<div className="p-[12px] rounded-[12px] bg-gray-400">Minutely</div>
								<div className="p-[12px] rounded-[12px] bg-gray-400">Hourly</div>
								<div className="p-[12px] rounded-[12px] bg-gray-400">Daily</div>
								<div className="p-[12px] rounded-[12px] bg-gray-400">Weekly</div>
							</div>
							<div>
								<div>Take a Month</div>
								<div>Monthly</div>
							</div>
						</div>
					</div>
					<div>
						<Button onClick={() => {}} className="bg-primary-dark text-primary-light" noUpperCase>
							Create a Stream
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Create;
