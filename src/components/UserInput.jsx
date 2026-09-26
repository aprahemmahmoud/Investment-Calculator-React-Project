



export default function UserInput({values,enevtHandler}) {

    

    return (
    <>
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input required="" type="number" onChange={(e) => enevtHandler("initialInvestment", +e.target.value || null)} value={values.initialInvestment}/>
                </p>
                    <p>
                        <label>Annual Investment</label>
                        <input required="" type="number" onChange={(e) => enevtHandler("annualInvestment", +e.target.value || null)} value={values.annualInvestment}/>
                    </p>
                        </div>
            <div className="input-group">
                    <p>
                        <label>Expected Return</label>
                        <input required="" type="number" onChange={(e) => enevtHandler("expectedReturn", +e.target.value || null)} value={values.expectedReturn}/>
                    </p>
                    <p>
                        <label>Duration</label>
                        <input required="" type="number" onChange={(e) => enevtHandler("duration", +e.target.value || 1)} value={values.duration}/>
                    </p>
            </div>
        </section>

    </>            
    )
}