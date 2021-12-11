import { BiExit } from "react-icons/bi";
import { BsChevronDoubleDown } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import Heading from "../../../components/Heading/Heading";
import {
	Actions,
	BiLinkIcon,
	ContentText,
	DashbaordWrapper,
	DashboardContent,
	DashboardExtraOptionsHeader,
	DashboardExtraOptionsRow,
	DashboardHeader,
	DashboardRow,
	DashboardRowWrapper,
	HeaderText,
	Icon,
	Number,
	PoolName,
	StreamOptions,
	Tag,
	Withdrawable,
	WithdrawButton,
} from "./Dashboard.styles";

const DhedgeDashboard = () => {
	return (
		<div>
			<Heading>dHEDGE Dashboard</Heading>
			<DashbaordWrapper>
				<DashboardHeader>
					<Icon>
						<BsChevronDoubleDown />
					</Icon>
					<Number>
						<HeaderText>#</HeaderText>
					</Number>
					<PoolName>
						<HeaderText>Pool Name</HeaderText>
					</PoolName>
					<Withdrawable>
						<HeaderText>Withdrawable</HeaderText>
					</Withdrawable>
					<Actions>
						<HeaderText>Actions</HeaderText>
					</Actions>
				</DashboardHeader>
				<DashboardContent>
					<DashboardRowWrapper>
						<DashboardRow>
							<Icon>
								<MdKeyboardArrowDown />
							</Icon>
							<Number>
								<ContentText>1</ContentText>
							</Number>
							<PoolName>
								<ContentText> Convex Strategies</ContentText>
								<BiLinkIcon />
							</PoolName>
							<Withdrawable>
								<ContentText>300</ContentText> <Tag>LPs</Tag>
							</Withdrawable>
							<Actions>
								<WithdrawButton>Withdraw Lp</WithdrawButton>
							</Actions>
						</DashboardRow>

						<div className="DashboardExtraOptions">
							<DashboardExtraOptionsHeader danger={true}>
								<Icon>Asset</Icon>
								<Number>
									<ContentText>Rate /month</ContentText>
								</Number>
								<PoolName>
									<ContentText>Streamed</ContentText>
								</PoolName>
								<Withdrawable>
									<ContentText>Uninvested</ContentText>
								</Withdrawable>
								<Actions>
									<ContentText>Stream Controls</ContentText>
								</Actions>
							</DashboardExtraOptionsHeader>
							<DashboardExtraOptionsRow>
								<Icon>
									<Tag>LPs</Tag>
								</Icon>
								<Number>
									<ContentText>100</ContentText>
								</Number>
								<PoolName>
									<ContentText>100</ContentText>
								</PoolName>
								<Withdrawable>
									<ContentText>100</ContentText>
									<BiExit />
								</Withdrawable>
								<Actions>
									<StreamOptions>
										<WithdrawButton>Edit</WithdrawButton>
										<WithdrawButton>Stop</WithdrawButton>
									</StreamOptions>
								</Actions>
							</DashboardExtraOptionsRow>

							<DashboardExtraOptionsRow>
								<Icon>
									<Tag>LPs</Tag>
								</Icon>
								<Number>
									<ContentText>100</ContentText>
								</Number>
								<PoolName>
									<ContentText>100</ContentText>
								</PoolName>
								<Withdrawable>
									<ContentText>100</ContentText>
								</Withdrawable>
								<Actions>
									<StreamOptions>
										<WithdrawButton>Edit</WithdrawButton>
										<WithdrawButton>Stop</WithdrawButton>
									</StreamOptions>
								</Actions>
							</DashboardExtraOptionsRow>

							<DashboardExtraOptionsRow>
								<Icon>
									<Tag>LPs</Tag>
								</Icon>
								<Number>
									<ContentText>100</ContentText>
								</Number>
								<PoolName>
									<ContentText>100</ContentText>
								</PoolName>
								<Withdrawable>
									<ContentText>100</ContentText>
								</Withdrawable>
								<Actions>
									<StreamOptions>
										<WithdrawButton>Edit</WithdrawButton>
										<WithdrawButton>Stop</WithdrawButton>
									</StreamOptions>
								</Actions>
							</DashboardExtraOptionsRow>
						</div>
					</DashboardRowWrapper>

					<DashboardRowWrapper>
						<DashboardRow>
							<Icon>
								<MdKeyboardArrowDown />
							</Icon>
							<Number>
								<ContentText>1</ContentText>
							</Number>
							<PoolName>
								<ContentText> Convex Strategies</ContentText>
								<BiLinkIcon />
							</PoolName>
							<Withdrawable>
								<ContentText>300</ContentText> <Tag>LPs</Tag>
							</Withdrawable>
							<Actions>
								<WithdrawButton>Withdraw Lp</WithdrawButton>
							</Actions>
						</DashboardRow>
					</DashboardRowWrapper>
				</DashboardContent>
			</DashbaordWrapper>
		</div>
	);
};

export default DhedgeDashboard;
