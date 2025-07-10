import Header from "@/components/global/header";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, MapPin, Users } from "lucide-react";
import { Button } from '@/components/ui/button';
import Footer from "@/components/global/footer";

export default async function OurStudioDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
		<div>
			<main className="w-full bg-[#444444] font-[family-name:var(--font-nunito)]">
				<div className="relative bg-white px-20 pb-[35vh]">
					<Header />
                    <div className="pt-[25vh] flex flex-row">
                        <div className="basis-1/6">
                            <div className="flex flex-row items-center cursor-pointer">
                                <ChevronLeft className="me-2" />
                                <div>Back</div>
                            </div>
                        </div>
                        <div className="basis-5/6">
                            <div className="h-[24rem] bg-[url('/our-studio/1.jpg')] bg-bottom bg-cover rounded-t-2xl mb-8"></div>
                            <section className="mb-10">
                                <div className="flex items-center justify-between mb-6">
                                    <h1 className="text-2xl font-bold">{slug}</h1>
                                    <div className="flex flex-row items-center justify-end gap-8">
                                        <div className="flex flex-row items-center gap-2 me-4">
                                            <div className="bg-[#FFC934] text-white p-2 rounded-full">
                                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.20166 0.395186C5.26106 0.958169 3.53588 2.09058 2.25121 3.64469C0.96654 5.19879 0.182019 7.10243 0 9.10724H4.58979C4.85733 6.05645 5.7455 3.09179 7.20023 0.393758L7.20166 0.395186ZM4.58979 10.8928H0C0.18164 12.8977 0.965826 14.8015 2.25025 16.3559C3.53467 17.9102 5.25968 19.043 7.20023 19.6063C5.7455 16.9082 4.85733 13.9436 4.58979 10.8928ZM9.50086 19.9877C7.76188 17.2409 6.69571 14.1255 6.38841 10.8928H13.6102C13.3029 14.1255 12.2367 17.2409 10.4977 19.9877C10.1656 20.0041 9.83294 20.0041 9.50086 19.9877ZM12.7998 19.6048C14.7401 19.0416 16.465 17.9091 17.7494 16.355C19.0338 14.8009 19.8181 12.8974 20 10.8928H15.4102C15.1427 13.9436 14.2545 16.9082 12.7998 19.6063V19.6048ZM15.4102 9.10724H20C19.8184 7.10235 19.0342 5.19853 17.7498 3.64417C16.4653 2.08981 14.7403 0.957074 12.7998 0.393758C14.2545 3.09179 15.1427 6.05645 15.4102 9.10724ZM9.50086 0.0123641C9.83341 -0.00412135 10.1666 -0.00412135 10.4991 0.0123641C12.2376 2.75923 13.3033 5.87467 13.6102 9.10724H6.38984C6.70109 5.85468 7.76965 2.7364 9.50086 0.0123641Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <div className="bg-[#FFC934] text-white p-2 rounded-full">
                                                <svg className="w-4 h-4" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M28.7308 0C31.6615 0 34.4722 1.16422 36.5445 3.23656C38.6168 5.30889 39.7811 8.11957 39.7811 11.0503V28.7308C39.7811 31.6615 38.6168 34.4722 36.5445 36.5445C34.4722 38.6168 31.6615 39.7811 28.7308 39.7811H11.0503C8.11957 39.7811 5.30889 38.6168 3.23656 36.5445C1.16422 34.4722 0 31.6615 0 28.7308V11.0503C0 8.11957 1.16422 5.30889 3.23656 3.23656C5.30889 1.16422 8.11957 0 11.0503 0H28.7308ZM19.8905 11.0503C17.546 11.0503 15.2974 11.9817 13.6395 13.6395C11.9817 15.2974 11.0503 17.546 11.0503 19.8905C11.0503 22.2351 11.9817 24.4837 13.6395 26.1415C15.2974 27.7994 17.546 28.7308 19.8905 28.7308C22.2351 28.7308 24.4837 27.7994 26.1415 26.1415C27.7994 24.4837 28.7308 22.2351 28.7308 19.8905C28.7308 17.546 27.7994 15.2974 26.1415 13.6395C24.4837 11.9817 22.2351 11.0503 19.8905 11.0503ZM19.8905 15.4704C21.0628 15.4704 22.1871 15.9361 23.016 16.765C23.845 17.594 24.3106 18.7182 24.3106 19.8905C24.3106 21.0628 23.845 22.1871 23.016 23.016C22.1871 23.845 21.0628 24.3106 19.8905 24.3106C18.7182 24.3106 17.594 23.845 16.765 23.016C15.9361 22.1871 15.4704 21.0628 15.4704 19.8905C15.4704 18.7182 15.9361 17.594 16.765 16.765C17.594 15.9361 18.7182 15.4704 19.8905 15.4704ZM29.8358 7.73521C29.2497 7.73521 28.6875 7.96805 28.273 8.38252C27.8586 8.79698 27.6257 9.35912 27.6257 9.94526C27.6257 10.5314 27.8586 11.0935 28.273 11.508C28.6875 11.9225 29.2497 12.1553 29.8358 12.1553C30.4219 12.1553 30.9841 11.9225 31.3985 11.508C31.813 11.0935 32.0459 10.5314 32.0459 9.94526C32.0459 9.35912 31.813 8.79698 31.3985 8.38252C30.9841 7.96805 30.4219 7.73521 29.8358 7.73521Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                            <div className="bg-[#FFC934] text-white p-2 rounded-full">
                                                <svg className="w-4 h-4" viewBox="0 0 47 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M39.7679 2.82552C36.7912 1.50836 33.5682 0.552357 30.211 0C30.152 0.000798166 30.0957 0.0237063 30.0543 0.0637339C29.6515 0.764802 29.1815 1.67832 28.8681 2.37938C25.3072 1.86984 21.6859 1.86984 18.125 2.37938C17.8116 1.65707 17.3416 0.764802 16.9164 0.0637339C16.894 0.0212449 16.8268 0 16.7597 0C13.4024 0.552357 10.2019 1.50836 7.20275 2.82552C7.18037 2.82552 7.15799 2.84676 7.13561 2.86801C1.04782 11.5145 -0.630793 19.9273 0.197325 28.2552C0.197325 28.2977 0.219707 28.3402 0.26447 28.3614C4.29315 31.1657 8.16516 32.8652 11.9924 33.9912C12.0596 34.0124 12.1267 33.9912 12.1491 33.9487C13.0443 32.7803 13.8501 31.5481 14.5439 30.2522C14.5887 30.1672 14.5439 30.0822 14.4544 30.061C13.1786 29.5936 11.97 29.0412 10.7838 28.4039C10.6943 28.3614 10.6943 28.2339 10.7614 28.1702C11.0076 28.0003 11.2538 27.8091 11.5 27.6391C11.5448 27.5966 11.6119 27.5966 11.6567 27.6178C19.3559 30.9532 27.6595 30.9532 35.2692 27.6178C35.314 27.5966 35.3811 27.5966 35.4259 27.6391C35.6721 27.8303 35.9183 28.0003 36.1645 28.1915C36.254 28.2552 36.254 28.3827 36.1421 28.4251C34.9783 29.0837 33.7473 29.6148 32.4715 30.0822C32.382 30.1035 32.3596 30.2097 32.382 30.2734C33.0982 31.5693 33.904 32.8015 34.7768 33.97C34.844 33.9912 34.9111 34.0124 34.9783 33.9912C38.8279 32.8652 42.6999 31.1657 46.7286 28.3614C46.7734 28.3402 46.7957 28.2977 46.7957 28.2552C47.7805 18.6314 45.1619 10.2823 39.8575 2.86801C39.8351 2.84676 39.8127 2.82552 39.7679 2.82552ZM15.7078 23.1777C13.4024 23.1777 11.4776 21.1595 11.4776 18.6739C11.4776 16.1883 13.3577 14.1701 15.7078 14.1701C18.0802 14.1701 19.9602 16.2096 19.9379 18.6739C19.9379 21.1595 18.0578 23.1777 15.7078 23.1777ZM31.3077 23.1777C29.0024 23.1777 27.0776 21.1595 27.0776 18.6739C27.0776 16.1883 28.9576 14.1701 31.3077 14.1701C33.6801 14.1701 35.5602 16.2096 35.5378 18.6739C35.5378 21.1595 33.6801 23.1777 31.3077 23.1777Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                            <div className="bg-[#FFC934] text-white p-2 rounded-full">
                                                <svg className="w-4 h-4" viewBox="0 0 44 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22 0C34.1506 0 44 9.84939 44 22C44 34.1506 34.1506 44 22 44C18.1121 44.0067 14.2925 42.9777 10.934 41.019L0.008834 44L2.98323 33.0704C1.02294 29.7108 -0.00677957 25.8896 3.35911e-05 22C3.35911e-05 9.84939 9.84943 0 22 0ZM14.5024 11.66L14.0624 11.6776C13.7779 11.6972 13.5 11.7719 13.244 11.8976C13.0055 12.0329 12.7877 12.2018 12.5972 12.3992C12.3332 12.6478 12.1836 12.8634 12.023 13.0724C11.2093 14.1304 10.7712 15.4293 10.7778 16.764C10.7822 17.842 11.0638 18.8914 11.5038 19.8726C12.4036 21.857 13.8842 23.958 15.8378 25.905C16.3086 26.3736 16.7706 26.8444 17.2678 27.2822C19.6954 29.4193 22.588 30.9605 25.7158 31.7834L26.9654 31.9748C27.3724 31.9968 27.7794 31.966 28.1886 31.9462C28.8292 31.9124 29.4547 31.7389 30.0212 31.438C30.3091 31.2891 30.5902 31.1276 30.8638 30.954C30.8638 30.954 30.9569 30.8909 31.1388 30.756C31.4358 30.536 31.6184 30.3798 31.8648 30.1224C32.0496 29.9317 32.2036 29.7102 32.3268 29.458C32.4984 29.0994 32.67 28.4152 32.7404 27.8454C32.7932 27.4098 32.7778 27.1722 32.7712 27.0248C32.7624 26.7894 32.5666 26.5452 32.3532 26.4418L31.0728 25.8676C31.0728 25.8676 29.1588 25.0338 27.9884 24.5014C27.8659 24.448 27.7347 24.4175 27.6012 24.4112C27.4507 24.3954 27.2985 24.4122 27.155 24.4604C27.0115 24.5086 26.8801 24.5871 26.7696 24.6906C26.7586 24.6862 26.6112 24.8116 25.0206 26.7388C24.9293 26.8615 24.8036 26.9542 24.6594 27.0051C24.5152 27.056 24.3591 27.0629 24.211 27.0248C24.0676 26.9866 23.9272 26.938 23.7908 26.8796C23.518 26.7652 23.4234 26.7212 23.2364 26.642C21.9733 26.0918 20.8042 25.3472 19.7714 24.4354C19.4942 24.1934 19.2368 23.9294 18.9728 23.6742C18.1074 22.8452 17.3531 21.9076 16.7288 20.8846L16.599 20.6756C16.5072 20.5343 16.4319 20.383 16.3746 20.2246C16.291 19.9012 16.5088 19.6416 16.5088 19.6416C16.5088 19.6416 17.0434 19.0564 17.292 18.7396C17.534 18.4316 17.7386 18.1324 17.8706 17.919C18.1302 17.501 18.2116 17.072 18.0752 16.7398C17.4592 15.235 16.8227 13.7383 16.1656 12.2496C16.0358 11.9548 15.6508 11.7436 15.301 11.7018C15.1822 11.6871 15.0634 11.6754 14.9446 11.6666C14.6492 11.6496 14.353 11.6526 14.058 11.6754L14.5024 11.66Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-[#999999] me-4">
                                            <MapPin className="me-4" size={24} />
                                            <div className="text-md">Lorem Ipsum</div>
                                        </div>
                                        <div className="flex items-center text-[#999999]">
                                            <Users className="me-4" size={24} />
                                            <div className="text-md">5-10</div>
                                        </div>
                                    </div> 
                                </div>
                                <Card className="rounded-xl overflow-hidden shadow-lg/10 border-none mb-6">
                                    <CardContent className="px-8">
                                        <div className="text-[#787878] mb-2">About</div>
                                        <div className="flex flex-row gap-10">
                                            <p className="text-sm mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                            <p className="text-sm mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                        </div>
                                    </CardContent>
                                </Card> 
                                <Card className="rounded-xl overflow-hidden shadow-lg/10 border-none">
                                    <CardContent className="px-8">
                                        <div className="text-[#787878] mb-2">Interest</div>
                                        <p className="text-sm mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                    </CardContent>
                                </Card> 
                            </section>

                            <section className="mb-8">
                                <h1 className="text-2xl font-bold mb-4">Produk</h1>
                                <div className="grid grid-cols-3 gap-6">
                                    <Card className="border border-[#FFC934] shadow-[0px_8px_0px_0px_#FFC934] hover:shadow-[0px_0px_0px_0px_#FFC934] transition-shadow duration-300 px-1 pt-1 pb-6 gap-0">
                                        <div className="h-[15rem] bg-[url('/home/usaha-micro-1.png')] bg-cover bg-start rounded-md mb-6"></div>
                                        <CardContent className="px-4">
                                            <p className="font-bold">Lorem Ipsum</p>
                                            <p>Studio ABCD</p>
                                            <p></p>
                                        </CardContent>
                                    </Card>
                                    <Card className="border border-[#FFC934] shadow-[0px_8px_0px_0px_#FFC934] hover:shadow-[0px_0px_0px_0px_#FFC934] transition-shadow duration-300 px-1 pt-1 pb-6 gap-0">
                                        <div className="h-[15rem] bg-[url('/home/usaha-micro-1.png')] bg-cover bg-start rounded-md mb-6"></div>
                                        <CardContent className="px-4">
                                            <p className="font-bold">Lorem Ipsum</p>
                                            <p>Studio ABCD</p>
                                            <p></p>
                                        </CardContent>
                                    </Card>
                                    <Card className="border border-[#FFC934] shadow-[0px_8px_0px_0px_#FFC934] hover:shadow-[0px_0px_0px_0px_#FFC934] transition-shadow duration-300 px-1 pt-1 pb-6 gap-0">
                                        <div className="h-[15rem] bg-[url('/home/usaha-micro-1.png')] bg-cover bg-start rounded-md mb-6"></div>
                                        <CardContent className="px-4">
                                            <p className="font-bold">Lorem Ipsum</p>
                                            <p>Studio ABCD</p>
                                            <p></p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                            <section>
                                <h1 className="text-2xl font-bold mb-4">Contact Person</h1>
                                <div className="grid grid-cols-3 gap-6">
                                    {Array.from({ length: 2 }).map((_, i) => (
                                        <Card key={i} className="pt-0 pb-6 gap-0 rounded-xl overflow-hidden">
                                            <div className="h-[15rem] bg-[url('/home/usaha-micro-2.png')] bg-cover bg-start mb-4	"></div>
                                            <CardContent>
                                                <p className="flex flex-row justify-between">
                                                    <div className="font-bold text-lg">Sarah James</div>
                                                    <div className="bg-[#FCCE4D] rounded-full px-4 flex items-center text-sm">Designer</div>
                                                </p>
                                                <p className="flex mb-4 items-center">
                                                    <MapPin className="text-[#FFC934] me-1" size={18} />
                                                    <div className="text-xs">Studio ABCD</div>
                                                </p>
                                                <p className="text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <div className="flex justify-center">
                                                    <Button className="rounded-full cursor-pointer bg-[#FFC934] px-16 py-5">Learn More</Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
				</div>
                
                <Footer />
			</main>
		</div>
    );
}
