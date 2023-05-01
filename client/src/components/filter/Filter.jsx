import { StyledFilterContainer } from './styles';

const Filter = ({ active, setActive, setSearch, setSort }) => {
	return (
		<StyledFilterContainer>
			<input onChange={e => setSearch(e.target.value)} type='text' />

			<div>
				<span>Active Only</span>
				<input
					onChange={() => setActive(!active)}
					type='checkbox'
					value={active}
				/>
			</div>
			<select onClick={e => setSort(Number(e.target.value))}>
				<option value={0}>Default</option>
				<option value={1}>By Name</option>
			</select>
		</StyledFilterContainer>
	);
};

export default Filter;
