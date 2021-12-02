import styled from "styled-components";

export const ComponentsStyled = styled.div`
	display: flex;
	flex-direction: column;
	.level {
		margin: 1rem 0;
		.component {
			margin: 1rem 0;
		}
	}
`;

export const Heading = styled.h1`
	font-size: ${(props) => props.theme.font.size.mainheading};
	color: ${(props) => props.theme.colors.primary.pink};
`;
