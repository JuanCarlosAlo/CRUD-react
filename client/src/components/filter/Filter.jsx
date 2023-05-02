import { StyledFilterContainer } from './styles';

const Filter = ({ filter, setFilter }) => {
	return (
		<StyledFilterContainer>
			<input
				onChange={e => setFilter({ ...filter, search: e.target.value })}
				type='text'
			/>

			<div>
				<span>Active Only</span>
				<input
					onChange={() => setFilter({ ...filter, active: !filter.active })}
					type='checkbox'
					value={filter.active}
				/>
			</div>
			<select
				onClick={e => setFilter({ ...filter, sort: Number(e.target.value) })}
			>
				<option value={0}>Default</option>
				<option value={1}>By Name</option>
			</select>
		</StyledFilterContainer>
	);
};

export default Filter;
