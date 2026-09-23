



export default function UserInput() {
    return (
    <>
        <section id="user-input">
            <div class="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input required="" type="number" value="100000"/>
                </p>
                    <p>
                        <label>Annual Investment</label>
                        <input required="" type="number" value="1225"/>
                    </p>
                        </div>
            <div class="input-group">
                    <p>
                        <label>Expected Return</label>
                        <input required="" type="number" value="3"/>
                    </p>
                    <p>
                        <label>Duration</label>
                        <input required="" type="number" value="1"/>
                    </p>
            </div>
        </section>

    </>            
    )
}