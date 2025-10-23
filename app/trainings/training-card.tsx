export type TrainingCardPropsType = {
  id: string;
  title: string;
  description: string;
}

export const TrainingCard = ({ title, description }: TrainingCardPropsType) => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-5 border border-gray-200">
      <h3 className="!text-[16px] sm:!text-[18px] !font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-[14px] sm:text-[16px] text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};